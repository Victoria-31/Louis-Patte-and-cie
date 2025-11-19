import mockData from '../data/mockData.json'
import styles from '../components/AnimalCard/AnimalCard.module.css'
import Link from 'next/link'

export default function Page() {

  const animals = mockData.animaux

  const getOwner = (proprietaire_id: number) => {
    return mockData.proprietaires.find(owner => owner.id === proprietaire_id)
  }

  return (
    <div className={styles.container}>
      {animals.map(animal => {
        const proprio = getOwner(animal.proprietaire_id);
        return (
          <div key={animal.id} className={styles.card}>
            <h2>{animal.nom}</h2>
            {animal.photo && (
            <img src={animal.photo} alt={animal.nom} className={styles.profilephoto} />
        )}
            <p>Propriétaire: {proprio?.prenom} {proprio?.nom}</p>
            <Link href={`/animal/${animal.id}`}>Voir détails</Link>
          </div>
        );
      })}
    </div>
  )
}