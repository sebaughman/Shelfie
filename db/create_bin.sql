INSERT INTO bins (bin_id, name, price, shelf_id)
VALUES ($1, $2, $3, $4);

SELECT * FROM bins
WHERE bin_id = $1 AND shelf_id = $4
