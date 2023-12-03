import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Clock,
  Color,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  PointLight,
  SphereGeometry,
  MeshPhongMaterial,
  Material,
  BufferGeometry,
} from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";

class WebGL {
  public renderer: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  public time = { delta: 0, elapsed: 0 };
  public start: number = Date.now();
  public effect: any;
  public sphere: any;
  public controls: any;

  private clock = new Clock();
  private resizeCallback?: () => void;
  private stats?: Stats;

  constructor() {
    const { width, height } = this.size;

    // this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    // this.renderer.setPixelRatio(window.devicePixelRatio)
    // this.renderer.setSize(width, height)
    // this.renderer.shadowMap.enabled = true

    window.addEventListener("resize", this.onWindowResize);

    this.camera = new PerspectiveCamera(70, width / height, 1, 1000);
    this.camera.position.y = 150 + 300;
    this.camera.position.z = 500 + 300;

    this.scene = new Scene();
    this.scene.background = new Color(0, 0, 0);

    const pointLight1 = new PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    this.scene.add(pointLight1);

    const pointLight2 = new PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    this.scene.add(pointLight2);

    this.sphere = new Mesh(
      new SphereGeometry(200, 20, 10),
      new MeshPhongMaterial({ flatShading: true })
    );
    this.scene.add(this.sphere);

    // Plane

    const plane = new Mesh(
      new PlaneGeometry(400, 400),
      new MeshBasicMaterial({ color: 0xe0e0e0 })
    );
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(width, height);

    this.effect = new AsciiEffect(this.renderer, " .:-+*=%@#", {
      invert: true,
    });
    this.effect.setSize(width, height);
    this.effect.domElement.style.color = "white";
    this.effect.domElement.style.backgroundColor = "black";

    // Special case: append effect.domElement, instead of renderer.domElement.
    // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

    // document.body.appendChild(this.effect.domElement); // DON'T APPEND ASCII OBJECT FOR NOW

    this.controls = new TrackballControls(this.camera, this.effect.domElement);

    window.addEventListener("resize", this.onWindowResize);
  }

  private onWindowResize() {
    const { width, height } = this.size;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.effect.setSize(window.innerWidth, window.innerHeight);
  }

  get size() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height, aspect: width / height };
  }

  setup(container: HTMLElement) {
    container.appendChild(this.renderer.domElement);
  }

  setStats(container: HTMLElement) {
    this.stats = new Stats();
    container.appendChild(this.stats.dom);
  }

  setResizeCallback(callback: () => void) {
    this.resizeCallback = callback;
  }

  getMesh<T extends Material>(name: string) {
    return this.scene.getObjectByName(name) as Mesh<BufferGeometry, T>;
  }

  render() {
    const timer = Date.now() - this.start;

    this.sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 100;
    this.sphere.rotation.x = timer * 0.0003;
    this.sphere.rotation.z = timer * 0.0002;

    // this.controls.update();

    this.scene.background = document.documentElement.classList.contains("dark")
      ? new Color("black")
      : new Color("white");

    this.effect.render(this.scene, this.camera);
  }

  requestAnimationFrame(callback: () => void) {
    gl.renderer.setAnimationLoop(() => {
      this.time.delta = this.clock.getDelta();
      this.time.elapsed = this.clock.getElapsedTime();
      this.stats?.update();
      callback();
    });
  }

  cancelAnimationFrame() {
    gl.renderer.setAnimationLoop(null);
  }

  dispose() {
    this.cancelAnimationFrame();
    gl.scene?.clear();
  }
}

export const gl = new WebGL();
