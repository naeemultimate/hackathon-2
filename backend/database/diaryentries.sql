DROP TABLE IF EXISTS diary;

CREATE TABLE diary(
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    entry_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO diary (title, content, entry_date)
VALUES
    ('A Fresh Start', 'Today I started writing a diary. It feels great to put my thoughts into words.', '2025-01-30'),
    ('Busy Day at Work', 'Work was hectic today, but I managed to finish my project on time.', '2025-01-29'),
    ('Relaxing Weekend', 'Spent the day reading my favorite book and drinking coffee. It was peaceful.', '2025-01-28'),
    ('Workout Motivation', 'Finally got back to the gym after a long break. Feeling sore but accomplished.', '2025-01-27'),
    ('Movie Night', 'Watched an old classic with friends. Sometimes, simple joys are the best.', '2025-01-26');