import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  prenom: string;
  nom: string;
  age: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    age: '',
    email: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ici, vous pouvez utiliser les valeurs dans formData pour effectuer les actions souhaitées, telles que l'envoi du formulaire à un serveur, le stockage dans une base de données, etc.
    console.log(formData);
    // Réinitialisation du formulaire
    setFormData({
      prenom: '',
      nom: '',
      age: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <div className="contact">
        <h2 className="contacth2">Formulaire de contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="age">Âge :</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          Message :
          <textarea
            name="message"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="boutton">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;