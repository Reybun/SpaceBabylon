import { Mesh, ParticleSystem, SphereParticleEmitter,Texture } from "@babylonjs/core";

/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 * 
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
export default class MyScript extends Mesh {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        const particleSystem = new ParticleSystem("particles", 50, this.getScene());
        particleSystem.particleEmitterType = new SphereParticleEmitter(100);
        particleSystem.emitter = this.position;
        particleSystem.particleTexture = new Texture("scenes/scene/files/Rune2.png", this.getScene());
        //particleSystem.targetStopDuration = 3;
        particleSystem.minSize = 0.1;
        particleSystem.updateSpeed = 0.03;
        particleSystem.maxSize = 1;
        particleSystem.start();
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }
}
