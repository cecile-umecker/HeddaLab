export function getCategoryLabel(key: string): string {
  const map: { [key: string]: string } = {
    'creepypasta': 'Creepypastas',
    'cook': 'Cuisine',
    'pictures': 'Photos',
    'it': 'Tech',
    'project': 'Projet'
  };
  return map[key] || key; // fallback au cas où
}