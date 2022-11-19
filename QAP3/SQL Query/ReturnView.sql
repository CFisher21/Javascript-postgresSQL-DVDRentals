CREATE VIEW return_view AS
SELECT customer.customer_id, rental.rental_id, customer.first_name, customer.last_name, rental.rental_date, rental.return_date
FROM customer
JOIN rental 
ON customer.customer_id=rental.customer_id
WHERE rental.return_date IS NULL
ORDER BY customer_id
