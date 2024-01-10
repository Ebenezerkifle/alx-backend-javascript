export const weakMap = new WeakMap();

export default function queryAPI(endPoint) {
  if (weakMap.has(endPoint)){
    // if aready has
    const nQuery = weakMap.get(endPoint);
    if (nQuery >= 4) throw(Error("Endpoint load is high"));
    weakMap.set(endPoint, nQuery + 1);
  }
  else{ weakMap.set(endPoint, 1); }
}
