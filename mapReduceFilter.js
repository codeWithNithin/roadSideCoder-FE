// map, filter, reduce

// what is map()?
// Map method is used to create a new array from existing one.
// by applying function to each applying array element

const nums = [1, 2, 3, 4]

const multiplyTheree = nums.map((ele, index, arr) => {
  return num * 3 + i
})

// filter, it applies the conditonal statement returns those elements, which satisfis the condition

const moreThanThree = nums.filter((ele) => ele > 2)

// reduce,it reduces array elements to single value
const sum = app.reduce(
  (acc, currentElement, index, arr) => acc + currentElement,
  0
)

// polyfills
Array.prototype.myMap = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }

  return result
}

Array.prototype.myFilter = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i])
  }

  return result
}

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[0]
  }

  return acc
}

let students = [
  {
    name: 'Piyush',
    rollNumber: 31,
    marks: 80,
  },
  {
    name: 'Jenny',
    rollNumber: 15,
    marks: 69,
  },
  {
    name: 'Kaushal',
    rollNumber: 16,
    marks: 35,
  },
  {
    name: 'Dilpreet',
    rollNumber: 7,
    marks: 55,
  },
]

// question 1 -> return only name of students in caps
const names = students.map((ele) => ele.name.toUpperCase())

// question 2 -> Return only details of those who scored mpre than 60 marks
const studentsData = students.filter((ele) => ele.marks > 60)

// question 3 -> More than 60 marks and roll number greater than 15
const data = students.filter((ele) => ele.rollNumber > 15 && ele.marks > 60)

// question 4 -> Sum of marks of all students
const studentSum = students.reduce((acc, ele) => acc + ele.marks, 0)

// question 5 -> Return only names of students who scored more than 60
const result = students.filter((ele) => ele.marks > 60).map((ele) => ele.name)
