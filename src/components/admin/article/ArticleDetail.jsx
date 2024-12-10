export default function ArticleDetail({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    // Data statis untuk slicing
    const staticArticle = {
        id: "P00001",
        title: "Peluang dan Tantangan Akuakultur di Era Modern",
        image: "./admin/article/ikan-segar.png",
        category: "Panduan dan Tips",
        date: "24 November 2024, 19:00",
        content: `
        Lorem ipsum dolor sit amet consectetur. Eu fringilla ullamcorper massa at malesuada in nibh risus tempor. Congue nunc dictumst pharetra at risus pharetra varius massa risus. Phasellus enim fames quis orci feugiat ut pharetra nam. Pharetra feugiat id odio sagittis.

        Lorem ipsum dolor sit amet consectetur. Phasellus sit cursus viverra ullamcorper tempor id enim metus. Nulla molestie cursus mauris facilisi rutrum id eleifend. Vulputate amet metus sit elementum. Augue et viverra hendrerit accumsan morbi tincidunt. In ut erat orci massa tincidunt est. Amet lorem magna mattis sollicitudin venenatis. Vestibulum turpis id eget eu. Quam posuere enim metus volutpat. Era libero tristique in acenean sed eu.

        Lorem ipsum dolor sit amet consectetur. 
        1. Lorem ipsum dolor sit acenean fermentum nibh. Sed amet ac diam nibh sed. Et sagittis aliquam consectetur volutpat. 
        2. Sed magna orci semper bibendum fames malesuada habitasse tellus. 
        3. Et pretium bibendum nunc dapibus risus tempor.
        4. Ut eget integer sit sit interdum sapien eu aliquam aliquet.
        5. Ac purus sagittis interdum pellentesque.

        Lorem ipsum dolor sit amet consectetur. At neque feugiat elit ante blandit non a egestas. In massa sit risus nullam orci augue scelerisque. 
        `,
      };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[600px] h-[400px] md:h-[550px] max-w-full mx-4 md:mx-6 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <h2 className="text-xl font-semibold text-neutral-1 text-center mt-4 mb-2">{staticArticle.title}</h2>
            <p className="text-center text-sm text-neutral-3 mb-6">{staticArticle.category} • {staticArticle.date}</p>
  
            {/* Gambar Artikel */}
            <img
              src={staticArticle.image}
              alt={staticArticle.title}
              className="rounded-lg w-full h-52 object-cover mb-6"
            />
  
            {/* Konten */}
            <div className="mb-4">
              {staticArticle.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            </div>
  
            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="bg-neutral-5 border border-2 border-neutral-4 text-neutral-1 font-semibold rounded-lg py-2 px-4 hover:bg-neutral-4 transition"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  