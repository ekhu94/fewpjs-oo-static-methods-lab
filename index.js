class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-z0-9' -]+/ig, "");
  }

  static titleize(str) {
    const noNos = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ').map((w, i) => {
      if (i === 0) return this.capitalize(w);
      if (!noNos.includes(w.toLowerCase())) return this.capitalize(w);
      return w;
    });
    return words.join(' ');
  }
}