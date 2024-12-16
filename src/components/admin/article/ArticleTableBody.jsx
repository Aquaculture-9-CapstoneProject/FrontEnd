import { useState } from "react";
import ArticleDetail from "./ArticleDetail";
import DeleteArticle from "./DeleteArticle";
import EditArticle from "./EditArticle";

export default function ArticleTableBody({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (article) => {
    setArticleToDelete(article);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setArticleToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleOpenEditModal = (article) => {
    setSelectedArticle(article);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedArticle(null);
    setIsEditModalOpen(false);
  };

  return (
    <>
      {articles.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center text-neutral-3 text-base py-4">
            Belum ada artikel yang ditambahkan
          </td>
        </tr>
      ) : (
        articles.map((article) => (
          <tr key={article.ID}>
            <td className="border-b border-neutral-4">
              <img
                src={article.Gambar}
                alt={article.Judul}
                className="article-image rounded-lg max-w-[120px] object-cover"
              />
            </td>
            <td
              className="text-secondary-5 text-xs border-b border-neutral-4 cursor-pointer hover:underline"
              onClick={() => handleOpenModal(article)}
            >
              {article.Judul}
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              {article.Kategori}
            </td>
            <td className="text-neutral-2 text-xs border-b border-neutral-4">
              {new Date(article.CreatedAt).toLocaleString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="border-b border-neutral-4">
              <div className="flex items-center gap-2">
                <button onClick={() => handleOpenEditModal(article)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.498901 12.401V14.9343C0.498901 15.1676 0.682235 15.351 0.915568 15.351H3.4489C3.55723 15.351 3.66557 15.3093 3.74057 15.226L12.8406 6.13431L9.71557 3.00931L0.623901 12.101C0.540568 12.1843 0.498901 12.2843 0.498901 12.401ZM15.2572 3.71764C15.5822 3.39264 15.5822 2.86764 15.2572 2.54264L13.3072 0.592642C12.9822 0.267642 12.4572 0.267642 12.1322 0.592642L10.6072 2.11764L13.7322 5.24264L15.2572 3.71764Z"
                      fill="#0D5B82"
                    />
                  </svg>
                </button>
                <button onClick={() => handleOpenDeleteModal(article)}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999959 13.6833C0.999959 14.5999 1.74996 15.3499 2.66663 15.3499H9.33329C10.25 15.3499 11 14.5999 11 13.6833V5.34993C11 4.43326 10.25 3.68326 9.33329 3.68326H2.66663C1.74996 3.68326 0.999959 4.43326 0.999959 5.34993V13.6833ZM11 1.18326H8.91663L8.32496 0.591596C8.17496 0.441596 7.95829 0.34993 7.74163 0.34993H4.25829C4.04163 0.34993 3.82496 0.441596 3.67496 0.591596L3.08329 1.18326H0.999959C0.541626 1.18326 0.166626 1.55826 0.166626 2.0166C0.166626 2.47493 0.541626 2.84993 0.999959 2.84993H11C11.4583 2.84993 11.8333 2.47493 11.8333 2.0166C11.8333 1.55826 11.4583 1.18326 11 1.18326Z"
                      fill="#BE123C"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))
      )}

      {/* Modal Detail Artikel */}
      <ArticleDetail
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Modal Hapus Artikel */}
      {isDeleteModalOpen && (
        <DeleteArticle
          article={articleToDelete}
          onClose={handleCloseDeleteModal}
        />
      )}

      {/* Modal Edit Artikel */}
      <EditArticle
        article={selectedArticle}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
      />
    </>
  );
}
