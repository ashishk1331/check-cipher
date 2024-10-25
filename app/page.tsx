"use client";

export default function Home() {

  async function checkCipher(formEvent) {
    formEvent.preventDefault();

    const formData = new FormData(formEvent.target);
    const plain_text = formData.get('decrypted-text');
    const day_number = formData.get('day-number');

    let { check } = await fetch('/api/check', {
      method: 'POST',
      body: JSON.stringify({ plain_text, day_number })
    }).then(res => res.json());
    
    alert(check ? '✅ You\'ve cracked the code.' : '❌ Not yet.');
  }

  return (
    <main style={{ maxWidth: '25rem', padding: '1rem', margin: 'auto' }}>
      <form onSubmit={checkCipher}>
        <fieldset>
          <label>
            Decrypted Text
            <textarea
              name="decrypted-text"
              placeholder="paste here"
              required
            />
          </label>

          <label>
            Day Number
            <select name="day-number" aria-label="Select your day number..." required>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </label>
        </fieldset>

        <input
          type="submit"
          value="Check"
        />
      </form>
    </main>
  );
}
