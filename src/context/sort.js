function sortFunction(data) {
  data.sort(function (a, b) {
    const nameA = a.medicineName.toUpperCase(); // ignore upper and lowercase
    const nameB = b.medicineName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}
export default sortFunction;