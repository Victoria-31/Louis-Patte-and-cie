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
            <div className={styles.cardLayout}>
              {animal.photo && (
                <img src={animal.photo} className={styles.profilephoto} alt={animal.nom} />
              )}
              <div className={styles.cardInfo}>
                <h2>{animal.nom}</h2>
                <p><strong>Espèce:</strong> {animal.espece} ({animal.race})</p>
                <p><strong>Sexe:</strong> {animal.sexe === 'M' ? 'Mâle' : 'Femelle'}</p>
                <p><strong>Propriétaire:</strong> {proprio?.prenom} {proprio?.nom}</p>
                {animal.vaccinations && animal.vaccinations.length > 0 && (
                  <p><strong>Vaccination:</strong> {animal.vaccinations.map(v => v.nom).join(', ')}</p>
                )}
                <Link href={`/animal/${animal.id}`}>Voir détails</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}