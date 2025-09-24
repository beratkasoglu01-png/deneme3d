import React, {useRef, useEffect} from 'react'
import * as THREE from 'three'

export default function ThreeScene(){
  const mountRef = useRef(null)

  useEffect(()=>{
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({color: 0x6699ff})
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5,5,5)
    scene.add(light)

    const ambient = new THREE.AmbientLight(0x404040)
    scene.add(ambient)

    let req = null
    const animate = ()=>{
      cube.rotation.x += 0.01
      cube.rotation.y += 0.015
      renderer.render(scene, camera)
      req = requestAnimationFrame(animate)
    }
    animate()

    const onResize = ()=>{
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w/h
      camera.updateProjectionMatrix()
      renderer.setSize(w,h)
    }
    window.addEventListener('resize', onResize)

    return ()=>{
      cancelAnimationFrame(req)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  },[])

  return <div ref={mountRef} className="w-full h-full" />
}
