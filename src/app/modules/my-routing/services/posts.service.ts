import { Injectable } from "@angular/core"

export interface Post {
    title: string
    text: string
    id: string
}

@Injectable ({
  providedIn: 'root'
})

export class PostService {
    posts: Post[] = [
      {
        title: 'Le latin de M. de Guise',
        text: 'Le lundi, dix-huitième jour du mois d’août 1572, il y avait grande fête au Louvre.',
        id: '1',
      },
      {
        title: 'La chambre de la reine de Navarre',
        text: 'Le duc de Guise reconduisit sa belle-sœur, la duchesse de Nevers, en son hôtel qui était situé rue du Chaume',
        id: '2',
      },
      {
        title: 'Un roi poète',
        text: 'Le lendemain et les jours qui suivirent se passèrent en fêtes, ballets et tournois.', 
        id: '3'     
      },
      {
        title: 'La soirée du 24 août 1572',
        text: 'Notre lecteur n’a pas oublié que dans le chapitre précédent il a été question d’un gentilhomme nommé La Mole',
        id: '4'
      },
      {
        title: 'Du Louvre en particulier et de la vertu en général',
        text: 'Les deux gentilshommes, renseignés par la première personne qu’ils rencontrèrent, prirent la rue d’Averon',
        id: '5',
      },
      {
        title: 'La dette payée',
        text: 'Maintenant, si le lecteur est curieux de savoir pourquoi M. de La Mole n’avait pas été reçu par le roi de Navarre',
        id: '6',
      },
      {
        title: 'La nuit du 24 août 1572',
        text: 'Lorsque La Mole et Coconnas eurent achevé leur maigre souper, car les volailles de l’hôtellerie de la Belle-Étoile ne flambaient que sur l’enseigne', 
        id: '7'     
      },
      {
        title: 'Les massacrés',
        text: 'L’hôtel qu’habitait l’amiral était, comme nous l’avons dit, situé rue de Béthisy.',
        id: '8'
      },
      {
        title: 'Les massacreurs',
        text: 'Coconnas n’avait pas fui, il avait fait retraite. La Hurière n’avait pas fui, il s’était précipité.',
        id: '9',
      },
      {
        title: 'Mort, messe ou Bastille ',
        text: 'Marguerite, comme nous l’avons dit, avait refermé sa porte et était rentrée dans sa chambre. ',
        id: '10',
      },
      {
        title: 'L’aubépine du cimetière des Innocents',
        text: 'Rentrée chez elle, Marguerite chercha vainement à deviner le mot que Catherine de Médicis avait dit tout bas à Charles IX', 
        id: '11'    
      },
      {
        title: 'Les confidences',
        text: 'Et, d’abord, où allons-nous? demanda Marguerite. Ce n’est pas au pont des Meuniers, j’imagine ?',
        id: '12'
      },
      {
        title: 'Comme il y a des clefs qui ouvrent les portes auxquelles elles ne sont pas destinées',
        text: 'Create a post in dependency component and send him to another component',
        id: '13',
      },
      {
        title: 'Seconde nuit de noces',
        text: 'La reine de Navarre, en rentrant au Louvre, trouva Gillonne dans une grande émotion. Madame de Sauve était venue en son absence.',
        id: '14',
      },
      {
        title: 'Ce que femme veut Dieu le veut',
        text: 'Marguerite ne s’était pas trompée : la colère amassée au fond du cœur de Catherine par cette comédie', 
        id: '15'     
      },
      {
        title: 'Le corps d’un ennemi mort sent toujours bon',
        text: 'Nulle troupe, si riche qu’elle soit, ne peut donner une idée de ce spectacle.',
        id: '16'
      },
      {
        title: 'Le confrère de maître Ambroise Paré',
        text: 'Le tombereau dans lequel on avait placé Coconnas et La Mole reprit la route de Paris, suivant dans l’ombre le groupe qui lui servait de guide.',
        id: '17',
      },
      {
        title: 'Les revenants',
        text: 'Pendant quelque temps les deux jeunes gens gardèrent chacun de son côté le secret enfermé dans sa poitrine.',
        id: '18',
      },
      {
        title: 'Le logis de maître René, le parfumeur de la reine mère',
        text: 'À l’époque où se passe l’histoire que nous racontons à nos lecteurs, il n’existait, pour passer d’une partie de la ville à l’autre, que cinq ponts, les uns de pierre, les autres de bois', 
        id: '19'     
      },
      {
        title: 'Les poules noires',
        text: 'Il était temps que les deux couples disparussent.',
        id: '20'
      },
      {
        title: 'L’appartement de Madame de Sauve ',
        text: 'Catherine ne s’était pas trompée dans ses soupçons. ',
        id: '21',
      },
      {
        title: 'Sire, vous serez roi',
        text: 'Sire, dit René à Henri, je viens vous parler d’une chose dont je m’occupe depuis longtemps.',
        id: '22',
      },
      {
        title: 'Un nouveau converti',
        text: 'Le lendemain, il devait y avoir chasse à courre dans la forêt de Saint-Germain. ', 
        id: '23'    
      },
      {
        title: 'La rue Tizon et la rue Cloche-Percée',
        text: 'La Mole sortit du Louvre tout courant, et se mit à fureter dans Paris pour découvrir le pauvre Coconnas. ',
        id: '24'
      },
      {
        title: 'Le manteau cerise',
        text: 'Coconnas ne s’était point trompé. La dame qui avait arrêté le cavalier au manteau cerise était bien la reine de Navarre',
        id: '25',
      },
      {
        title: 'Margarita',
        text: 'Pendant la conversation que nous venons de rapporter, La Mole et Coconnas montaient leur faction',
        id: '26',
      },
      {
        title: 'La main de Dieu',
        text: 'Henri avait dit à madame de Sauve en la quittant', 
        id: '27'    
      },
      {
        title: 'La lettre de Rome',
        text: 'Quelques jours s’étaient écoulés depuis les événements que nous venons de raconter, lorsqu’un matin une litière escortée de plusieurs gentilshommes aux couleurs de M. de Guise entra au Louvre',
        id: '28'
      },
      {
        title: 'Le départ',
        text: 'Lorsque le lendemain un beau soleil rouge, mais sans rayons, comme c’est l’habitude dans les jours privilégiés de l’hiver,',
        id: '29'
      },
      {
        title: 'Maurevel.',
        text: 'Pendant que toute cette jeunesse joyeuse et insouciante, en apparence du moins, se répandait comme un tourbillon doré sur la route de Bondy, Catherine',
        id: '30'
      },
      {
        title: 'La chasse à courre',
        text: 'Le piqueur qui avait détourné le sanglier et qui avait affirmé au roi que l’animal n’avait pas quitté l’enceinte ne s’était pas trompé.',
        id: '31'
      },
    ];

    getById(id: string) {      
      return this.posts.find(p => p.id === id);
    }    

    nextPost (id: string) {
      let currentIdx = this.posts.findIndex(p => p.id === id)      
      let nextIdx = currentIdx+1;
      
      if (nextIdx < this.posts.length) {        
        return this.posts[nextIdx]
      } else {         
        return this.posts[currentIdx]
      }      
    }
}