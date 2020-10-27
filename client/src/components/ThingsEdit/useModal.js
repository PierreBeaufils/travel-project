import { useState } from 'react';
// fonction permettant de selectionner la modale à afficher en fonction du nom (string) de la modale à afficher
const useModal = (modalName) => {
  const [isShowingModalDeleteCard, setIsShowingModalDeleteCard] = useState(false);
  const [isShowingModalCardDescription, setIsShowingModalCardDescription] = useState(false);
  const [isShowingModalAddAccomodation, setIsShowingModalAddAccomodation] = useState(false);
  const [isShowingModalAddTransport, setIsShowingModalAddTransport] = useState(false);
  const [isShowingModalAddActivity, setIsShowingModalAddActivity] = useState(false);

  function toggleModalDeleteCard() {
    setIsShowingModalDeleteCard(!isShowingModalDeleteCard);
  }
  function toggleModalCardDescription() {
    setIsShowingModalCardDescription(!isShowingModalCardDescription);
  }
  function toggleModalAddAccomodation() {
    setIsShowingModalAddAccomodation(!isShowingModalAddAccomodation);
  }
  function toggleModalAddTransport() {
    setIsShowingModalAddTransport(!isShowingModalAddTransport);
  }
  function toggleModalAddActivity() {
    setIsShowingModalAddActivity(!isShowingModalAddActivity);
  }

  switch (modalName) {
    case 'ModalDeleteCard':

      return {
        isShowingModalDeleteCard,
        toggleModalDeleteCard,
      };
    case 'ModalCardDescription':

      return {
        isShowingModalCardDescription,
        toggleModalCardDescription,
      };
    case 'ModalAddAccomodation':

      return {
        isShowingModalAddAccomodation,
        toggleModalAddAccomodation,
      };
    case 'ModalAddTransport':

      return {
        isShowingModalAddTransport,
        toggleModalAddTransport,
      };
    case 'ModalAddActivity':

      return {
        isShowingModalAddActivity,
        toggleModalAddActivity,
      };
    default:
      console.log(`Sorry, we are out of ${modalName}.`);
  }
};

export default useModal;
