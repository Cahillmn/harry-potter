<template>
<main class="main four">
        <h1>The Official Harry Potter Blog!</h1>
        <article class="blog">
            <img src="../assets/sorting-hat.jpeg" alt="Harry Potter wearing the sorting hat">
            <section>
                <h3>Which House Would You End Up In?</h3>
                <p>Phasellus faucibus eros pharetra ultricies dignissim. Donec nec sagittis nisi. Quisque lobortis dolor
                    vel
                    turpis tempus, non mollis velit maximus. Fusce eros velit, ullamcorper sed fermentum et,
                    pellentesque
                    sit amet justo. Suspendisse cursus sapien vel ipsum hendrerit, a dignissim diam ultricies. In et
                    erat
                    nec tellus rhoncus bibendum ut at tellus. Aliquam rutrum, orci ac suscipit lacinia, nibh orci
                    vestibulum
                    eros, quis viverra massa odio non sapien. Donec hendrerit rhoncus ipsum, a aliquet libero finibus
                    dignissim. Sed facilisis eros eu risus consectetur, a finibus eros tincidunt. Etiam ultricies
                    egestas
                    sem.</p>
            </section>
        </article>

        <article class="blog">
            <img src="../assets/wand.png" alt="Harry Potter holding a wand">
            <section>
                <h3>What Type of Wand Suits You?</h3>
                <p>Phasellus faucibus eros pharetra ultricies dignissim. Donec nec sagittis nisi. Quisque lobortis dolor
                    vel
                    turpis tempus, non mollis velit maximus. Fusce eros velit, ullamcorper sed fermentum et,
                    pellentesque
                    sit amet justo. Suspendisse cursus sapien vel ipsum hendrerit, a dignissim diam ultricies. In et
                    erat
                    nec tellus rhoncus bibendum ut at tellus. Aliquam rutrum, orci ac suscipit lacinia, nibh orci
                    vestibulum
                    eros, quis viverra massa odio non sapien. Donec hendrerit rhoncus ipsum, a aliquet libero finibus
                    dignissim. Sed facilisis eros eu risus consectetur, a finibus eros tincidunt. Etiam ultricies
                    egestas
                    sem.</p>
            </section>
        </article>

        <article class="blog">
            <img src="../assets/quidditch.jpeg" alt="Harry Potter playing quidditch">
            <section>
                <h3>Local Quidditch Matches Coming to All Major Cities!
                </h3>
                <p>Phasellus faucibus eros pharetra ultricies dignissim. Donec nec sagittis nisi. Quisque lobortis dolor
                    vel
                    turpis tempus, non mollis velit maximus. Fusce eros velit, ullamcorper sed fermentum et,
                    pellentesque
                    sit amet justo. Suspendisse cursus sapien vel ipsum hendrerit, a dignissim diam ultricies. In et
                    erat
                    nec tellus rhoncus bibendum ut at tellus. Aliquam rutrum, orci ac suscipit lacinia, nibh orci
                    vestibulum
                    eros, quis viverra massa odio non sapien. Donec hendrerit rhoncus ipsum, a aliquet libero finibus
                    dignissim. Sed facilisis eros eu risus consectetur, a finibus eros tincidunt. Etiam ultricies
                    egestas
                    sem.</p>
            </section>
        </article>

        <article class="blog">
            <img src="../assets/series.png" alt="Harry Potter characters">
            <section>
                <h3>Harry Potter Series Coming to HBO Max!</h3>
                <p>Phasellus faucibus eros pharetra ultricies dignissim. Donec nec sagittis nisi. Quisque lobortis dolor
                    vel
                    turpis tempus, non mollis velit maximus. Fusce eros velit, ullamcorper sed fermentum et,
                    pellentesque
                    sit amet justo. Suspendisse cursus sapien vel ipsum hendrerit, a dignissim diam ultricies. In et
                    erat
                    nec tellus rhoncus bibendum ut at tellus. Aliquam rutrum, orci ac suscipit lacinia, nibh orci
                    vestibulum
                    eros, quis viverra massa odio non sapien. Donec hendrerit rhoncus ipsum, a aliquet libero finibus
                    dignissim. Sed facilisis eros eu risus consectetur, a finibus eros tincidunt. Etiam ultricies
                    egestas
                    sem.</p>
            </section>
        </article>


    </main>
</template>

<style lang="scss">
main {

    h2 {
        padding-top: 2rem;
    }

    .blog {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        padding-top: 2rem;

        img {
        max-width: 25%;
        display: block;
        padding-left: 3rem;
    }

        section {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        h3 {
            padding-bottom: 1rem;
        }
    }


}
</style>