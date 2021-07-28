<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.jsm'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.jsm'

export default {
  name: 'MyCanvas',

  data() {
    return {
      controls: null,
      camera: null,
      n: 0,
      loader: null,
    }
  },

  methods: {
    init: function () {
      let container = this.$refs.canvas
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setClearColor(0x0080ff, 0)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        1,
        500
      )
      container.appendChild(this.renderer.domElement)

      // the light
      let hlight = new THREE.AmbientLight(0x22222, 2)
      hlight.position.set(0, 200, 0)
      this.scene.add(hlight)
      let dlight = new THREE.AmbientLight(0x13080f, 50)
      dlight.position.set(0, -200, 0)
      this.scene.add(dlight)

      let light = new THREE.PointLight(0x333333, 10)
      light.position.set(-200, 200, 200)
      this.scene.add(light)
      let light2 = new THREE.PointLight(0x333333, 10)
      light2.position.set(200, 200, -200)
      this.scene.add(light2)
      let light3 = new THREE.PointLight(0x333333, 10)
      light3.position.set(200, 200, 200)
      this.scene.add(light3)
      let light4 = new THREE.PointLight(0x333333, 10)
      light4.position.set(-200, 200, -200)
      this.scene.add(light4)
      // the camera position
      this.camera.position.y = -10
      this.camera.position.x = 50
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableZoom = false
      this.controls.enablePan = false
      this.controls.update()
      // the helmet
      this.loader = new GLTFLoader()
      // console.log(this.loader)
      this.loader.load('/land/scene.gltf', (gltf) => {
        this.scene.add(gltf.scene)
        this.renderer.render(this.scene, this.camera)
        this.ani()
      })
    },

    ani: function () {
      requestAnimationFrame(this.ani)
      this.scene.rotation.y += 0.004
      this.renderer.render(this.scene, this.camera)
    },
  },

  mounted() {
    this.init()
  },

  head() {
    return {
      meta: [
        {
          name: 'description',
          content: document.body.innerText.substring(0, 160),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
}
</style>
