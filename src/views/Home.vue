<template>
  <main class="main home">
    <img
      class="trio"
      src="../assets/trio.jpeg"
      alt="Harry, Hermione, and Ron"
    />

    <h1>Welcome to the Biggest Harry Potter Fan Site!</h1>
    <p class="intro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta,
      mauris in malesuada lacinia, velit diam varius libero, quis accumsan purus
      est id lectus. Vivamus ligula lectus, malesuada ac blandit vitae, sagittis
      non massa. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Vestibulum in orci dignissim, malesuada nulla in,
      sagittis ligula. Vestibulum nibh lorem, elementum vitae pulvinar sit amet,
      malesuada ut nisi. Cras mauris diam, accumsan eu est id, vulputate
      consequat orci. Phasellus pharetra dolor et auctor congue. Suspendisse
      porttitor in mi suscipit bibendum. Sed semper enim iaculis odio rutrum
      ornare. Cras mauris diam, accumsan eu est id, vulputate
      consequat orci. Phasellus pharetra dolor et auctor congue. Suspendisse
      porttitor in mi suscipit bibendum. Sed semper enim iaculis odio rutrum
      ornare.
    </p>

    <h2>The Books</h2>

    <section class="container">
      <article class="books">
        <img
          class="book-image"
          src="../assets/book1.jpg"
          alt="Picture of Harry Potter and the Sorcerer's Stone cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Sorcerer's Stone</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book2.jpg"
          alt="Picture of Harry Potter and the Chamber of Secrets cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Chamber of Secrets</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book3.jpg"
          alt="Picture of Harry Potter and the Prisoner of Azkaban cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Prisoner of Azkaban</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book4.jpg"
          alt="Picture of Harry Potter and the Goblet of Fire cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Goblet of Fire</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book5.jpg"
          alt="Picture of Harry Potter and the Order of the Phoenix cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Order of the Phoenix</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book6.jpg"
          alt="Picture of Harry Potter and the Half Blood Prince cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Half Blood Prince</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>

      <article class="books">
        <img
          class="book-image"
          src="../assets/book7.jpg"
          alt="Picture of Harry Potter and the Deathly Hallows cover"
        />
        <section class="book-info">
          <h3>Harry Potter and the Deathly Hallows</h3>
          <p>
            Corrum volorit iandae nimaxim cum restia volor reicid ut et etur
            sunt arum rendae pla endis re ea erum, qui doluptae
          </p>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.trio, .book-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding-top: 3rem;
}

p {
  color: black;
}

.intro {
  text-align: center;
  padding: 3rem 5rem;
  color: black;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .books {
    width: 20%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 575px) {

    .books {
      width: 80%
    }
  }

  .book-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2rem;
  }

  .book-info {
    text-align: center;
  }

  .book-info p {
    padding-top: 1rem;
  }
}
</style>
