function toggleItem(arr, id) {
  return arr.map((item) => {
    if (item.id === id) {
      return { ...item, status: true };
    } else {
      return { ...item, status: false };
    }
  });
}

export { toggleItem };
