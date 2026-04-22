import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  let character = gltf.scene;
  let mixer = new THREE.AnimationMixer(character);
  let idleAction: THREE.AnimationAction | null = null;
  let elapsed = 0;

  if (gltf.animations?.length) {
    const idleClip = gltf.animations[0];
    idleAction = mixer.clipAction(idleClip);
    idleAction.timeScale = 0.6;
    idleAction.fadeIn(0.8).play();
  }

  // chest bone for breathing, spine for sway
  const chest = character.getObjectByName("Spine1") || character.getObjectByName("Spine") || character.getObjectByName("spine") || null;
  const spine = character.getObjectByName("Spine2") || character.getObjectByName("Hips") || null;

  function update(delta: number) {
    elapsed += delta;
    // subtle breathing on chest
    if (chest) {
      chest.scale.setScalar(1 + Math.sin(elapsed * 1.2) * 0.008);
    }
    // gentle sway on spine
    if (spine) {
      spine.rotation.z = Math.sin(elapsed * 0.6) * 0.012;
      spine.rotation.x = Math.sin(elapsed * 0.4) * 0.008;
    }
    // float the whole character
    character.position.y = Math.sin(elapsed * 0.8) * 0.008;
  }

  function startIntro() {
    if (idleAction) {
      idleAction.reset().fadeIn(0.8).play();
    }
  }

  function hover(_gltf: GLTF, _hoverDiv: HTMLDivElement) {}

  return { mixer, startIntro, hover, update };
};

export default setAnimations;
