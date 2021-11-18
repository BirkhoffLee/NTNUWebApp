// ...
<button :onClick="throwError" />
    Throw error
</button>
// ...

export default {
  // ...
  methods: {
    throwError: function() {
        throw new Error('Sentry Error')
    }
  }
};
