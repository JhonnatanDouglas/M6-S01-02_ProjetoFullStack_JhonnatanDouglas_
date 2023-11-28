const formatTelephone = (telephone: string): string => {
  if (telephone.length === 10) {
    return `(${telephone.slice(0, 2)}) ${telephone.slice(2, 6)}-${telephone.slice(6, 10)}`;
  }

  return `(${telephone.slice(0, 2)}) ${telephone.slice(2, 7)}-${telephone.slice(7, 11)}`;
};

export { formatTelephone };
