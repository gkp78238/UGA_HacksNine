class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleDailyActivitiesResponse = (response) => {
    const normalizedResponse = response.toLowerCase();
    if (normalizedResponse === 'yes' || normalizedResponse === 'y') {
      const message = this.createChatBotMessage("Would you like your caretaker to share any hobbies or interests with you? (Yes/No)");
      this.updateChatbotState(message);
    } else if (normalizedResponse === 'no' || normalizedResponse === 'n') {
    } else {
      const errorMessage = this.createChatBotMessage("Sorry, I didn't understand that. Please respond with Yes or No.");
      this.updateChatbotState(errorMessage);
    }
  };

  handleHobbiesInterestsResponse = (response) => {
    const normalizedResponse = response.toLowerCase();
    if (normalizedResponse === 'yes' || normalizedResponse === 'y') {
      const message = this.createChatBotMessage("Do you need a caretaker with specialized skills or experience, for example, in managing dementia or mobility issues? (Yes/No)");
      this.updateChatbotState(message);
    } else if (normalizedResponse === 'no' || normalizedResponse === 'n') {
      
      const message = this.createChatBotMessage("Proceeding to the next question...");
      this.updateChatbotState(message);
    } else {
      const errorMessage = this.createChatBotMessage("Sorry, I didn't understand that. Please respond with Yes or No.");
      this.updateChatbotState(errorMessage);
    }
  };

  handleSpecializedSkillsResponse = (response) => {
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
