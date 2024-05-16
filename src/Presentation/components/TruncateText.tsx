export function truncateText(text: string | undefined | null, maxLength: number): string {
  if (!text) {
    return '';
  }
  
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + '...';
}
