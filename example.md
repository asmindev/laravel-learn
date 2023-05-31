VenueCategory::create([
'name' => 'Lapangan',
'slug' => 'lapangan',
]);

VenueCategory::create([
'name' => 'Gedung',
'slug' => 'gedung',
]);

User::create([
'name' => 'Admin',
'username' => 'admin',
'phone_number' => '081234567890',
'email' => 'admin@gmail.com',
'role' => 'admin',
'password' => 'password',
]);
User::create([
'name' => 'Tester',
'username' => 'tester',
'phone_number' => '081234567891',
'email' => 'tester@gmail.com',
'role' => 'user',
'password' => 'password',
]);

Venue::create([
'user_id' => 1,
'venue_category_id' => 1,
'slug' => 'venue-1',
'name' => 'Venue 1',
'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
'address' => '123 Main Street',
'capacity' => 100,
'price' => 500,
'open' => '09:00:00',
'close' => '18:00:00',
'photo' => 'https://images.unsplash.com/photo-1588865198054-c83788106132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
'contact' => 'venue1@example.com',
]);

Venue::create([
'user_id' => 1,
'venue_category_id' => 2,
'slug' => 'venue-2',
'name' => 'Venue 2',
'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
'address' => '123 Main Street',
'capacity' => 100,
'price' => 500,
'open' => '09:00:00',
'close' => '18:00:00',
'photo' => 'https://images.unsplash.com/photo-1605807355758-73bdd6b846d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
'contact' => 'venue1@example.com',
]);

Venue::create([
'user_id' => 1,
'venue_category_id' => 2,
'slug' => 'venue-3',
'name' => 'Venue 3',
'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
'address' => '123 Main Street',
'capacity' => 100,
'price' => 500,
'open' => '09:00:00',
'close' => '18:00:00',
'photo' => 'https://images.unsplash.com/photo-1627546927336-1ec6a380863b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
'contact' => 'venue1@example.com',
]);

Venue::create([
'user_id' => 1,
'venue_category_id' => 2,
'slug' => 'venue-4',
'name' => 'Venue 4',
'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
'address' => '123 Main Street',
'capacity' => 100,
'price' => 500,
'open' => '09:00:00',
'close' => '18:00:00',
'photo' => 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
'contact' => 'venue1@example.com',
]);
Venue::create([
'user_id' => 2,
'venue_category_id' => 1,
'slug' => 'venue-5',
'name' => 'Venue 5',
'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
'address' => '123 Main Street',
'capacity' => 100,
'price' => 500,
'open' => '09:00:00',
'close' => '18:00:00',
'photo' => 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
'contact' => 'venue1@example.com',
]);

VenueReview::create([
'venue_id' => 2,
'user_id' => 1,
'rating' => 5,
'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
]);

VenueReview::create([
'venue_id' => 2,
'user_id' => 2,
'rating' => 5,
'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
]);

VenueReview::create([
'venue_id' => 2,
'user_id' => 1,
'rating' => 5,
'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
]);

VenueReview::create([
'venue_id' => 3,
'user_id' => 2,
'rating' => 5,
'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
]);
