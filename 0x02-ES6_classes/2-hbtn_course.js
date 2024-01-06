export default class HolbertonCourse {
  // the constructor of a class.
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;    
  }

  // setter and getter methods
  get name() {
    return this._name;
  }

  set name(value) {
    if( typeof value != String){
      throw TypeError('Name must be a String');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if( typeof value != Number) {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

   /**
     * Gets the names of students in this course.
     */
   get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
   
}
