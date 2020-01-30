class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :author
      t.string :content
      t.string :description
      t.string :publishedAt
      t.string :sourceName
      t.string :title
      t.string :url
      t.string :urlToImage

      t.timestamps
    end
  end
end
