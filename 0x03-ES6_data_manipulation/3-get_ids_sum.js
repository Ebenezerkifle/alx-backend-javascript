export default function getStudentIdsSum(list) {
  const value = list.reduce((total, current) => total + current.id, 0);
  return value;
}
