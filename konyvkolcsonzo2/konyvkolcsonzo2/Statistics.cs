using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace konyvkolcsonzo2
{
    internal static class Statistics
    {
        static List<Book> books;
        public static void Run()
        {
            try
            {
                ReadAllBook();
                books.ForEach(book => { Console.WriteLine(book.Title); });
            }
            catch (MySqlException ex)
            {
                Console.WriteLine("Hiba az adatbázis csatlakozáskor");
                Console.WriteLine(ex.Message);
            }
        }
        public static void ReadAllBook()
        {
            BookService bookService = new BookService();
            books = bookService.GetBooks();
        }
    }
}   
