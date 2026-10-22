import './App.css'
import studentImage from './assets/student.jpeg'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const etudiants = [
  {
    studentName: "Amine khalfet",
    email: "khalfetamine@gmail.com",
    tlf: "+216 21 301 717",
    fili: "Glsi",
    annee: 2027,
    grp: "c",
    ville: "Mahdia",
    image: studentImage,
  },
  {
    studentName: "Sarra Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    tlf: "+216 22 345 678",
    fili: "Glsi",
    annee: 2027,
    grp: "b",
    ville: "Sousse",
    image: studentImage,
  },
  {
    studentName: "Mariem Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    tlf: "+216 27 567 890",
    fili: "Glsi",
    annee: 2027,
    grp: "a",
    ville: "Mahdia",
    image: studentImage,
  },
];
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          studentName={etudiant.studentName}
          email={etudiant.email}
          tlf={etudiant.tlf}
          fili={etudiant.fili}
          annee={etudiant.annee}
          grp={etudiant.grp}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App