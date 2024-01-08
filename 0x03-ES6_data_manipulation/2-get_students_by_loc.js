export default function getStudentsByLocation(list, location) {
  return list.filter((e) => e.location == location);
}
