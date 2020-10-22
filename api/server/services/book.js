import db from "../models"

export default class  {
    static async getAllBooks() {
      try {
        return await db.Book.findAll();
      } catch (error) {
        throw error;
      }
    }
  
    static async addBook(newBook) {
      console.log(newBook)
      try {
        return await db.Book.create(newBook);
      } catch (error) {
        throw error;
      }
    }
  
    static async updateBook(id, updateBook) {
      try {
        const bookToUpdate = await db.Book.findOne({
          where: { id: Number(id) }
        });
  
        if (bookToUpdate) {
          await database.Book.update(updateBook, { where: { id: Number(id) } });
  
          return updateBook;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  
    static async getABook(id) {
      try {
        const theBook = await db.Book.findOne({
          where: { id: Number(id) }
        });
  
        return theBook;
      } catch (error) {
        throw error;
      }
    }
  
    static async deleteBook(id) {
      try {
        const bookToDelete = await db.Book.findOne({ where: { id: Number(id) } });
  
        if (bookToDelete) {
          const deletedBook = await db.Book.destroy({
            where: { id: Number(id) }
          });
          return deletedBook;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  }