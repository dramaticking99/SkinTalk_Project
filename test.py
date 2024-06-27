import speedtest
import time
import threading
import sys

def test_internet_speed():
    st = speedtest.Speedtest()
    
    download_speed = st.download() / 10**6
    upload_speed = st.upload() / 10**6
    ping = st.results.ping
    
    print(f"DOWNLOAD SPEED : {download_speed:.2f} Mbps")
    print(f"UPLOAD SPEED   : {upload_speed:.2f} Mbps")
    print(f"PING           : {ping:.2f} ms")
    
    # Signal that the speed test is done
    speed_test_done.set()

def animate():
    s = "|/-\\"
    #s=[".","..","...","...","..","."]
    while not speed_test_done.is_set():
        for i in range(200):
            time.sleep(0.1)
            if speed_test_done.is_set():
                break
            print("{}".format(s[i % len(s)]), end="\r", flush=True)
            #print("{}".format(s[i % len(s)]), end="\r", flush=True)
            sys.stdout.flush()

speed_test_done = threading.Event()

speed_test_thread = threading.Thread(target=test_internet_speed)
animation_thread = threading.Thread(target=animate)

speed_test_thread.start()
animation_thread.start()

speed_test_thread.join()
animation_thread.join()