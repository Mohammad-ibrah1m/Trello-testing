import { API_KEY, TOKEN } from "../../support/constants.cy";

class sharedDataUtils {
  createBoard = (boardName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/boards/?name=${boardName}&key=${API_KEY}&token=${TOKEN}`
    );
  };

  deleteBoard = (boardId) => {
    return cy.request(
      "DELETE",
      `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${TOKEN}`
    );
  };

  createList = (boardId, listName) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${API_KEY}&token=${TOKEN}`
    );
  };

  createCard = (listId, cardTitle, isTemplate = false) => {
    return cy.request(
      "POST",
      `https://api.trello.com/1/cards?name=${cardTitle}&idList=${listId}&key=${API_KEY}&token=${TOKEN}&isTemplate=${isTemplate}`
    );
  };
}

export default sharedDataUtils;
