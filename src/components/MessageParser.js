class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('yes') || lowerCaseMessage.includes('no')) {
      this.actionProvider.handleDailyActivitiesResponse(lowerCaseMessage);
    } else {
    }
  }
}

export default MessageParser;
