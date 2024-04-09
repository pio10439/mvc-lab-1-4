let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
  res.render('home', { 
    title: 'Add new student', 
    heading: 'Add new student' 
  });
};

exports.addStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
  const newStudent = {
    id: nextId,
    fullName,
    code,
    fieldOfStudies
  };

  students.push(newStudent);
  nextId++;

  res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
  res.render('success', { 
    title: 'Success', 
    heading: 'Success', 
    message: 'Student has been added with success!' 
  });
};

exports.getStudentsList = () => {
  return students;
};
