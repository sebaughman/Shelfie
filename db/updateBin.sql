UPDATE bins
SET name = $3, price = $4
WHERE bin_id = $2
AND shelf_id = $1;

SELECT * FROM bins
WHERE bin_id = $2
AND shelf_id = $1;
