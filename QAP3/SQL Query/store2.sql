CREATE VIEW notreturned_store2 AS
SELECT customer.customer_id, rental.rental_id, customer.first_name, customer.last_name, rental.rental_date, rental.return_date, customer.store_id
FROM customer
JOIN rental 
ON customer.customer_id=rental.customer_id
WHERE rental.return_date IS NULL AND customer.store_id = 2
ORDER BY customer_id