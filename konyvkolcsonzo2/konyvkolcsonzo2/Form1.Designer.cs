namespace konyvkolcsonzo2
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            DeleteButton = new Button();
            dataGrid = new DataGridView();
            title = new DataGridViewTextBoxColumn();
            author = new DataGridViewTextBoxColumn();
            publish_year = new DataGridViewTextBoxColumn();
            page_count = new DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)dataGrid).BeginInit();
            SuspendLayout();
            // 
            // DeleteButton
            // 
            DeleteButton.Location = new Point(48, 46);
            DeleteButton.Name = "DeleteButton";
            DeleteButton.Size = new Size(75, 23);
            DeleteButton.TabIndex = 0;
            DeleteButton.Text = "Törlés";
            DeleteButton.UseVisualStyleBackColor = true;
            DeleteButton.Click += DeleteButton_Click;
            // 
            // dataGrid
            // 
            dataGrid.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGrid.Columns.AddRange(new DataGridViewColumn[] { title, author, publish_year, page_count });
            dataGrid.Dock = DockStyle.Bottom;
            dataGrid.Location = new Point(0, 112);
            dataGrid.MultiSelect = false;
            dataGrid.Name = "dataGrid";
            dataGrid.RowTemplate.Height = 25;
            dataGrid.Size = new Size(800, 338);
            dataGrid.TabIndex = 1;
            // 
            // title
            // 
            title.DataPropertyName = "title";
            title.HeaderText = "Cím";
            title.Name = "title";
            title.Width = 250;
            // 
            // author
            // 
            author.DataPropertyName = "author";
            author.HeaderText = "Szerző";
            author.Name = "author";
            author.Width = 250;
            // 
            // publish_year
            // 
            publish_year.DataPropertyName = "publish_year";
            publish_year.HeaderText = "Kiadás éve";
            publish_year.Name = "publish_year";
            // 
            // page_count
            // 
            page_count.DataPropertyName = "page_count";
            page_count.HeaderText = "Oldalszám";
            page_count.Name = "page_count";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(dataGrid);
            Controls.Add(DeleteButton);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)dataGrid).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Button DeleteButton;
        private DataGridView dataGrid;
        private DataGridViewTextBoxColumn title;
        private DataGridViewTextBoxColumn author;
        private DataGridViewTextBoxColumn publish_year;
        private DataGridViewTextBoxColumn page_count;
    }
}
