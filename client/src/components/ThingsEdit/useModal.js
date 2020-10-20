import { useState } from 'react';
// fonction permettant de selectionner la modale à afficher en fonction du nom (string) de la modale à afficher
const useModal = (modalName) => {
  switch (modalName) {
    case 'ModalDeleteCard':
      const [isShowingModalDeleteCard, setIsShowingModalDeleteCard] = useState(false);
      function toggleModalDeleteCard() {
        setIsShowingModalDeleteCard(!isShowingModalDeleteCard);
      }
      return {
        isShowingModalDeleteCard,
        toggleModalDeleteCard,
      };
      break;
    case 'ModalCardDescription':
      const [isShowingModalCardDescription, setIsShowingModalCardDescription] = useState(false);
      function toggleModalCardDescription() {
        setIsShowingModalCardDescription(!isShowingModalCardDescription);
      }
      return {
        isShowingModalCardDescription,
        toggleModalCardDescription,
      };
      break;
      case 'ModalAddAccomodation':
      const [isShowingModalAddAccomodation, setIsShowingModalAddAccomodation] = useState(false);
      function toggleModalAddAccomodation() {
        setIsShowingModalAddAccomodation(!isShowingModalAddAccomodation);
      }
      return {
        isShowingModalAddAccomodation,
        toggleModalAddAccomodation,
      };
      break;
      case 'ModalAddTransport':
      const [isShowingModalAddTransport, setIsShowingModalAddTransport] = useState(false);
      function toggleModalAddTransport() {
        setIsShowingModalAddTransport(!isShowingModalAddTransport);
      }
      return {
        isShowingModalAddTransport,
        toggleModalAddTransport,
      };
      break;
      case 'ModalAddActivity':
      const [isShowingModalAddActivity, setIsShowingModalAddActivity] = useState(false);
      function toggleModalAddActivity() {
        setIsShowingModalAddActivity(!isShowingModalAddActivity);
      }
      return {
        isShowingModalAddActivity,
        toggleModalAddActivity,
      };
      break;
    default:
      console.log(`Sorry, we are out of ${modalName}.`);
  }
};

export default useModal;
