/**
 * Classe générique de pagination pour Angular
 * Utilisation :
 *   const paginator = new Paginator<Post>(posts, 6);
 *   const page1 = paginator.getPage(1);
 */

export class Paginator<T> {
  private items: T[] = [];
  pageSize: number;
  currentPage: number;

  constructor(items: T[], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  /**
   * Met à jour les données paginées (ex: changement de filtre/catégorie)
   */
  setItems(items: T[]): void {
    this.items = items;
    this.currentPage = 1;
  }

  /**
   * Renvoie le nombre total de pages
   */
  get totalPages(): number {
    return Math.ceil(this.items.length / this.pageSize);
  }

  /**
   * Renvoie les éléments d'une page donnée
   */
  getPage(page: number): T[] {
    if (page < 1 || page > this.totalPages) {
      return [];
    }

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  /**
   * Renvoie la liste des numéros de page, pour l'affichage (ex: [1, 2, 3])
   */
  getPageRange(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
