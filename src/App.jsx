
import './App.css'
const fiche="fiche etudiant";
const studentName ="Amine khalfet";
const email ="khalfetamine@gmail.com";
const tlf="+216 21 301 717";
const fili="Glsi";
const annee=2027;
const grp="c";
const ville="Mahdia";


function App() {

  return (
   <div>
    <h1> {fiche}</h1>
    <p><strong>Nom&Prenom : </strong>{studentName}</p>
    <p><strong>Email :</strong> {email}</p>
    <p><strong>Telephone :</strong> {tlf}</p>
    <p><strong>Filiere : </strong>{fili}</p>
    <p><strong>annee d'etude :</strong> {annee}</p>
    <p><strong>grp :</strong> {grp}</p>
    <p><strong>Ville :</strong> {ville}</p>
   </div>
  );
}
export default App