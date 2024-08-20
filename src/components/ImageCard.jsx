import React from 'react';

function ImageCard({ image }) {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="w-full h-48 object-cover rounded-sm"
      />
      <div className="px-4 py-3">
        <h3 className="mb-2 text-center text-gray-900 font-mono font-semibold text-lg">
          Photo By {image.user}
        </h3>
        <ul className="flex flex-col justify-start mb-4 font-mono text-sm">
          <li className="flex justify-between mb-1">
            <strong>Views:</strong>
            <p>{image.views}</p>
          </li>
          <li className="flex justify-between mb-1">
            <strong>Downloads:</strong>
            <p>{image.downloads}</p>
          </li>
          <li className="flex justify-between mb-1">
            <strong>Likes:</strong>
            <p>{image.likes}</p>
          </li>
        </ul>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-gray-100 font-mono text-xs rounded-full bg-teal-500"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
