/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class SingletonTS {
    private static instance: SingletonTS;
    private _version: string;
  
    /**
     * Constructor method to be called by static method
     * @param version value that represents the version of the instance
     */
  
    // STEP 1
    private constructor(version: string) { //En TS si se pueden asignar private o public de manera explicita
      this._version = version;
    }
  
    /**
     * Static method that returns unique created instance or create it
     * @param version used only to help us to differentiate the instances
     * @returns unique Singleton instance
     */
  
    // STEP 2
    static getInstance(version: string): SingletonTS {
      if (!SingletonTS.instance) {
        SingletonTS.instance = new SingletonTS(version);
      }
  
      return SingletonTS.instance;
    }
  
    /**
     * Singleton version attribute getter
     * @returns the version of the instance
     */
    get version(): string {
      return this._version;
    }
}
  
  /**
   * Main function
   */
function appSingletonTS() {
    console.log('--- [TS] Calling appSingleton ---\n');
    const singleton1 = Singleton.getInstance('version-1');
    const singleton2 = Singleton.getInstance('version-2');
    const singleton3 = Singleton.getInstance('version-3');
  
    console.log(
      `singleton1 and singleton2 are equal? ${
        singleton1 === singleton2 ? 'yes' : 'no'
      }`
    );
    console.log(
      `singleton2 and singleton3 are equal? ${
        singleton2 === singleton3 ? 'yes' : 'no'
      }`
    );
  
    // Let's verify if the versions are equal too
    console.log(`singleton1 version: ${singleton1.version}`);
    console.log(`singleton2 version: ${singleton2.version}`);
    console.log(`singleton3 version: ${singleton3.version}`);
}
  
appSingletonTS();