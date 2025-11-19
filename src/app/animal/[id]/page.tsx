import mockData from '../../../data/mockData.json'
import styles from '../../../components/AnimalCard/AnimalCard.module.css'

export default async function AnimalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const animal = mockData.animaux.find(animal => animal.id === parseInt(id));
    
    if (!animal) {
        return <div>Animal not found</div>;
    }
    
    const proprietaire = mockData.proprietaires.find(p => p.id === animal.proprietaire_id);
    
    return (
    <div className={`${styles.container} ${styles.card}`}>
        <h1 >Carnet de santé</h1>
        
        {animal.photo && (
            <img src={animal.photo} alt={animal.nom} className={styles.photo} />
        )}
        
        <h2>{animal.nom}</h2>
        
        <section className={styles.detailcard}>
            <h3>Informations générales</h3>
            <p><strong>Espèce:</strong> {animal.espece}</p>
            <p><strong>Race:</strong> {animal.race}</p>
            <p><strong>Date de naissance:</strong> {animal.date_naissance}</p>
            <p><strong>Poids:</strong> {animal.poids} kg</p>
            <p><strong>Sexe:</strong> {animal.sexe}</p>
            <p><strong>Allergies:</strong> {animal.allergies || 'Aucune'}</p>
        </section>

        {proprietaire && (
            <section className={styles.detailcard}>
                <h3>Propriétaire</h3>
                <p><strong>Nom:</strong> {proprietaire.prenom} {proprietaire.nom}</p>
                <p><strong>Téléphone:</strong> {proprietaire.telephone}</p>
                <p><strong>Email:</strong> {proprietaire.email}</p>
            </section>
        )}

        <section className={styles.detailcard}>
            <h3>Vaccinations</h3>
            {animal.vaccinations.map((vacc, index) => (
                <div key={index}>
                    <p><strong>{vacc.nom}</strong></p>
                    <p>Date: {vacc.date}</p>
                    <p>Rappel: {vacc.rappel}</p>
                </div>
            ))}
        </section>

        <section className={styles.detailcard}>
            <h3>Historique médical</h3>
            {animal.historique.map((entry, index) => (
                <div key={index}>
                    <p><strong>Date:</strong> {entry.date}</p>
                    <p><strong>Motif:</strong> {entry.motif}</p>
                    <p><strong>Notes:</strong> {entry.notes}</p>
                </div>
            ))}
        </section>
    </div>  
    )
}