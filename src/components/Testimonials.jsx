import React from 'react';

const customerReviews = [
  {
    name: 'Lorem Ipsum',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Dolor Sit',
    review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Amet Consectetur',
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Adipiscing Elit',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {customerReviews.map((review, index) => (
          <div key={index} className="card bg-base-100 w-full max-w-md shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title">-{review.name}</h2>
              <p>{review.review}</p>
              <div className="card-actions justify-end">
                {[...Array(review.stars)].map((_, starIndex) => (
                  <div key={starIndex} className="mask mask-star-2 bg-orange-400 w-6 h-6"></div>
                ))}
                <div>Rating: {review.stars} out of 5 stars</div>
                <div className="text-right mt-4 text-md">
                  <p>{review.extraContent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}