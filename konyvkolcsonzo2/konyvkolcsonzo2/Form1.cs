using System.Runtime.CompilerServices;
using MySql.Data.MySqlClient;

namespace konyvkolcsonzo2
{
    public partial class Form1 : Form
    {
        private BookService bookService;
        public Form1()
        {
            InitializeComponent();
            dataGrid.AutoGenerateColumns = false;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            try
            {
                bookService = new BookService();
                RefreshdataGrid();
            }
            catch (MySqlException ex)
            {
                MessageBox.Show("Hiba a kapcsolat ki��pt�sekor!");
                this.Close();
            }
        }
        private void RefreshdataGrid()
        {
            dataGrid.DataSource = bookService.GetBooks();
            dataGrid.ClearSelection();
        }

        private void DeleteButton_Click(object sender, EventArgs e)
        {
            if (dataGrid.SelectedRows.Count == 0)
            {
                MessageBox.Show("A t�rl�shez v�lasz ki elemet!");
                return;
            }

            DialogResult result = MessageBox.Show("Biztos t�r�lni steretn�?", "Biztos", MessageBoxButtons.YesNo);
            if (result != DialogResult.Yes)
            {
                return;
            }
            try
            {
                Console.WriteLine(dataGrid.SelectedRows.Count);
                if (dataGrid.SelectedRows.Count > 0)
                {
                    Book selected = dataGrid.SelectedRows[0].DataBoundItem as Book;
                    if (selected != null)
                    {
                        if (bookService.DeleteBook(selected.Id))
                        {
                            MessageBox.Show("Sikeres t�rl�s");
                        }
                        else
                        {
                            MessageBox.Show("A k�nyv m�r t�r�lve van!");
                        }
                        RefreshdataGrid();
                    }
                    else
                    {
                        MessageBox.Show("A kiv�lasztott elem nem k�nyv t�pus�.");
                    }
                }
                else
                {
                    MessageBox.Show("Nincs kiv�lasztott sor.");
                }
            }
            catch (MySqlException ex)
            {

                MessageBox.Show(ex.Message, "Hiba a t�rl�s sor�n");
            }
        }

    }
}
