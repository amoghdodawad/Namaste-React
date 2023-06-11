We see a warning that says "Each child in a list should have unique key prop", we get that error because
we don't pass a key that is unique to that child. There is a keyword called "key", which in this case can be 
the restaurant id. Passing that key will resolve this warning.

Soo.... Why do we need a key?
-> So it has to do with how React renders things, let's say if we add a new res-card to our body, then if we add
key to each res-card then React exactly knows which card to render, otherwise it will render the while root once again
taking a huge performance hit!
-> Using index as a key is not preferred because if we add or remove and elements, indexes might get changed resulting
in re-rendering the whole page!
Not using keys <<<<<<< Using index as keys <<<<<<<< Using a key-attribute

