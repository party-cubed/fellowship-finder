import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>𝓕𝓮𝓵𝓵𝓸𝔀𝓼𝓱𝓲𝓹 𝓕𝓲𝓷𝓭𝓮𝓻</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Already a party member?</span>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </div>
      </header>
      <hr />
      <h1>ROLL FOR FRIENDS</h1>
      <h3>
        Are you ready to trade your NPC companions for some real-life party members?
      </h3>
      <h3>Enter Felloship Finder!</h3>
      <p>
        Maybe you're a seasoned Dungeon Master in need of
        brave heroes, or perhaps you're a level 1 Bard itching to narrate your first saga.
        Our platform is designed to help you find your perfect adventuring compangions, whether
        you're a stary-eyed newcomer or a travel worn veteran. So, roll the dice, cast
        'Summon Allies', and find yourself the perfect party!
      </p>
      <Link to="/signup">
        <button>Join the Party</button>
      </Link>
    </div>
  );
}

export default Welcome;
